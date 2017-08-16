import App from 'desktop/apps/today/components/App'
import { renderReactLayout } from 'desktop/components/react/utils/renderReactLayout'
import metaphysics from 'lib/metaphysics.coffee'

export const index = async (req, res, next) => {
  const { partner_shows } = await metaphysics({ query: ShowQuery() })

  const layout = renderReactLayout({
    basePath: req.app.get('views'),
    blocks: {
      head: 'meta.jade',
      body: App
    },
    locals: {
      ...res.locals,
      partnerShows: partner_shows,
      assetPackage: 'partners'
    },
    data: {}
  })

  res.send(layout)
}

function ShowQuery () {
  return `{
    partner_shows(
      near: {
        lat: 40.73
        lng: -73.9
        max_distance: 50
      }
        status: CURRENT
      size: 5
    ) {
      id
      name
      status
      partner {
        type
      }
    }
  }`
}
