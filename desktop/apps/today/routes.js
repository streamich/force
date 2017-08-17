import App from 'desktop/apps/today/components/App'
import { renderReactLayout } from 'desktop/components/react/utils/renderReactLayout'
import metaphysics from 'lib/metaphysics.coffee'

export async function index (req, res, next) {
  try {
    const { partner_shows } = await metaphysics({ query: ShowQuery() })

    const layout = renderReactLayout({
      basePath: req.app.get('views'),
      blocks: {
        head: 'meta.jade',
        body: App
      },
      locals: {
        ...res.locals,
        assetPackage: 'partners'
      },
      data: {
        partnerShows: partner_shows
      }
    })

    res.send(layout)
  } catch (error) {
    next(error)
  }
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
