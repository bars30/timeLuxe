export const host = "https://new2-mynl.onrender.com"
export const enviroenment = {
 bestselledwatches: {
  get: host + '/api/bestselledwatches'
 },
 rolex: {
  datejust: {
   get: host + '/rolex/datejust'
  }
 },
 collection: {
  rolex: {
   datejust: {
    get: host + '/rolex/coll/datejust'
   },
   submariner: {
    get: host + '/rolex/coll/submariner'
   },
   gmtmasterll: {
    get: host + '/rolex/coll/gmtmasterll'
   }
  }
 }
}









