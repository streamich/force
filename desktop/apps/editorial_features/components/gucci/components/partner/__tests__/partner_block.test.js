import 'jsdom-global/register'
import React from 'react'
import { mount } from 'enzyme'
import { PartnerBlock } from '../partner_block.jsx'

describe('Partner Inline', () => {
  const props = {
    logo: 'http://partner.com/logo.jpg',
    url: 'http://partner.com'
  }

  it('Renders "Presented..." text, partner link and logo', () => {
    const component = mount(
      <PartnerBlock {...props} />
    )
    component.html().should.containEql('Presented In Partnership With')
    component.html().should.containEql('href="http://partner.com"')
    component.html().should.containEql('src="http://partner.com/logo.jpg"')
  })
})