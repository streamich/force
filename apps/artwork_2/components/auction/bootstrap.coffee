module.exports = (sd, { artwork }) ->
  if artwork.is_in_auction
    sd.AUCTION =
      artwork_id: artwork.id
      id: artwork.sale.id
      minimum_next_bid: artwork.sale_artwork.minimum_next_bid
