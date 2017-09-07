import React from 'react'
import { HomeView } from 'routes/Home/components/HomeView'
import { render } from 'enzyme'

describe('(View) Home', () => {
  let _component

  beforeEach(() => {
    _component = render(<HomeView sendMessage={() => {}} />)
  })

  it('Renders the home view', () => {
    const welcome = _component.find('.view--home')
    expect(welcome).to.exist
  })
})
