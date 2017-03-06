import _ from 'lodash'

import './TabithaView.scss'

import React from 'react'

import { resolveLocalization } from 'helpers/localize'
import { DEFAULT_LANGUAGE_CODE } from 'content/global'

const TABITHA_LINE_TYPE_TEXT = 'text'
const TABITHA_LINE_TYPE_CHORDS = 'chords'
const TABITHA_LINE_TYPE_TITLE = 'title'

const TABITHA_LINE_TYPES = {
  [TABITHA_LINE_TYPE_TEXT]: {
    name: {
      [DEFAULT_LANGUAGE_CODE]: 'Lyrics'
    }
  },
  [TABITHA_LINE_TYPE_CHORDS]: {
    name: {
      [DEFAULT_LANGUAGE_CODE]: 'Chords'
    }
  },
  [TABITHA_LINE_TYPE_TITLE]: {
    name: {
      [DEFAULT_LANGUAGE_CODE]: 'Title'
    }
  }
}

const TABITHA_DELETE_BUTTON_TEXT = {
  [DEFAULT_LANGUAGE_CODE]: 'Delete'
}

const TABITHA_PREVIEW_BUTTON_TEXT = {
  [DEFAULT_LANGUAGE_CODE]: 'Preview'
}

const TABITHA_EDIT_BUTTON_TEXT = {
  [DEFAULT_LANGUAGE_CODE]: 'Edit'
}

const TABITHA_EMPTY_PLACEHOLDER = {
  [DEFAULT_LANGUAGE_CODE]: 'Insert lyrics, chords, or section titles here'
}

const DEFAULT_EMPTY_LINE = {
  type: TABITHA_LINE_TYPE_TEXT,
  text: ''
}

export class TabithaView extends React.Component {
  static propTypes = {}
  constructor (props) {
    super(props)

    this.state = {
      lines: [
        Object.assign({}, DEFAULT_EMPTY_LINE)
      ],
      linesSelected: {},
      preview: false
    }

    this._onDeleteGlobal = this._onDeleteGlobal.bind(this)
    this._onPreviewToggleGlobal = this._onPreviewToggleGlobal.bind(this)
    this._onTypeChangeGlobal = this._onTypeChangeGlobal.bind(this)
    this._onSelectChangeGlobal = this._onSelectChangeGlobal.bind(this)
  }
  _onDeleteGlobal () {
    const lines = this.state.lines.filter(line => !line.selected)

    if (!lines.length) lines.push(Object.assign({}, DEFAULT_EMPTY_LINE))

    this.setState({
      lines
    })
  }
  _onPreviewToggleGlobal () {
    this.setState({
      preview: !this.state.preview
    })
  }
  _onTypeChangeGlobal (event) {
    const lines = this.state.lines.map(line => {
      if (!line.selected) return line

      return Object.assign(line, {
        selected: false,
        type: event.target.value
      })
    })

    this.setState({
      lines
    })
  }
  _onSelectChangeGlobal (event) {
    const lines = this.state.lines.map(line => Object.assign(line, {
      selected: event.target.checked
    }))

    this.setState({
      lines
    })
  }
  lineRecentlyAdded (lineIndex) {
    if (lineIndex !== this.state.lineRecentlyAdded) return false

    this.setState({
      lineRecentlyAdded: null
    })

    return true
  }
  addNewBlankLine (atIndex = this.state.lines.length) {
    const lines = this.state.lines.concat()

    lines.splice(atIndex, 0, Object.assign({}, DEFAULT_EMPTY_LINE))

    this.setState({
      lines,
      lineRecentlyAdded: atIndex
    })
  }
  getSelectedLines () {
    return this.state.lines.filter(line => line.selected)
  }
  onTextChangeGenerator (lineIndex) {
    return (event) => {
      const lines = this.state.lines.concat()

      lines[lineIndex].text = event.target.value

      this.setState({
        lines
      })
    }
  }
  onPasteGenerator (lineIndex) {
    return (event) => {
      event.stopPropagation()
      event.preventDefault()

      const pastedLines = event.clipboardData.getData('Text').split('\n')
        .map(lineText => ({
          type: TABITHA_LINE_TYPE_TEXT,
          text: lineText
        }))
      const lines = this.state.lines.concat()
      lines.splice.apply(lines, [lineIndex, 1].concat(pastedLines))

      this.setState({
        lines
      })
    }
  }
  onTypeChangeGenerator (lineIndex) {
    return (event) => {
      if (this.getSelectedLines().length) return this._onTypeChangeGlobal(event)

      const lines = this.state.lines.concat()

      lines[lineIndex].type = event.target.value

      this.setState({
        lines
      })
    }
  }
  onSelectGenerator (lineIndex) {
    return (event) => {
      const lines = this.state.lines.concat()

      lines[lineIndex].selected = event.target.checked

      this.setState({
        lines
      })
    }
  }
  onKeyPressGenerator (lineIndex) {
    return (event) => {
      if (event.key === 'Enter') {
        this.addNewBlankLine(lineIndex + 1)
        event.stopPropagation()
        event.preventDefault()
      }
    }
  }
  render () {
    return (
      <div className='view--tabitha row'>
        {this.state.preview
          ? <div className='tabitha-preview'>
            <div className='tabitha-preview__line--global'>
              <a
                className='tabitha-preview__edit'
                href='javascript:void(0)'
                onClick={this._onPreviewToggleGlobal}
              >
                {resolveLocalization(TABITHA_EDIT_BUTTON_TEXT)}
              </a>
            </div>
            {this.state.lines.map((line, lineIndex) => (
              <input
                key={`tabitha-preview-line-${lineIndex}`}
                className={`tabitha-preview__line tabitha-preview__line--${line.type}`}
                type='text'
                value={line.text}
                disabled
              />
            ))}
          </div>
          : <form className='tabitha-editor' onSubmit={_.noop}>
            <div className='tabitha-editor__line--global'>
              <label
                className='tabitha-editor__checkbox-wrapper'
                htmlFor={`tabitha-editor-global-checkbox`}
              >
                <input
                  className='tabitha-editor__checkbox'
                  type='checkbox'
                  id={`tabitha-editor-global-checkbox`}
                  onChange={this._onSelectChangeGlobal}
                  checked={this.getSelectedLines().length === this.state.lines.length}
                />
              </label>
              <select
                className='tabitha-editor__select'
                onChange={this._onTypeChangeGlobal}
                disabled={!this.getSelectedLines().length}
              >
                {_.map(TABITHA_LINE_TYPES, (lineType, lineTypeId) => (
                  <option
                    value={lineTypeId}
                    key={`tabitha-editor-global-checkbox-option-${lineTypeId}`}
                  >
                    {resolveLocalization(lineType.name)}
                  </option>
                ))}
              </select>
              <a
                className='tabitha-editor__delete'
                href='javascript:void(0)'
                disabled={!this.getSelectedLines().length}
                onClick={this._onDeleteGlobal}
              >
                {resolveLocalization(TABITHA_DELETE_BUTTON_TEXT)}
              </a>
              <a
                className='tabitha-editor__preview'
                href='javascript:void(0)'
                onClick={this._onPreviewToggleGlobal}
              >
                {resolveLocalization(TABITHA_PREVIEW_BUTTON_TEXT)}
              </a>
            </div>
            {this.state.lines.map((line, lineIndex) => (
              <div className='tabitha-editor__line' key={`tabitha-editor-line-${lineIndex}`}>
                <label
                  className='tabitha-editor__checkbox-wrapper'
                  htmlFor={`tabitha-editor-line-${lineIndex}-checkbox`}
                >
                  <input
                    className='tabitha-editor__checkbox'
                    type='checkbox'
                    id={`tabitha-editor-line-${lineIndex}-checkbox`}
                    checked={!!line.selected}
                    onChange={this.onSelectGenerator(lineIndex)}
                  />
                </label>
                <select
                  className='tabitha-editor__select'
                  onChange={this.onTypeChangeGenerator(lineIndex)}
                  value={line.type}
                >
                  {_.map(TABITHA_LINE_TYPES, (lineType, lineTypeId) => (
                    <option
                      value={lineTypeId}
                      key={`tabitha-editor-line-${lineIndex}-checkbox-option-${lineTypeId}`}
                    >
                      {resolveLocalization(lineType.name)}
                    </option>
                  ))}
                </select>
                <input
                  className='tabitha-editor__text'
                  type='text'
                  value={line.text}
                  onChange={this.onTextChangeGenerator(lineIndex)}
                  onPaste={this.onPasteGenerator(lineIndex)}
                  onKeyPress={this.onKeyPressGenerator(lineIndex)}
                  ref={input =>
                    this.lineRecentlyAdded(lineIndex) &&
                    input &&
                    input.focus()
                  }
                  placeholder={this.state.lines.length === 1 ? resolveLocalization(TABITHA_EMPTY_PLACEHOLDER) : ''}
                />
              </div>
            ))}
          </form>
        }
      </div>
    )
  }
}

export default TabithaView
