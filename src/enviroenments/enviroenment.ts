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
   },
   daydate: {
    get: host + '/rolex/coll/daydate'
   },
   cosmographdaytona : {
    get: host + '/rolex/coll/cosmographdaytona'
   },
   oysterperpetual : {
    get: host + '/rolex/coll/oysterperpetual'
   },
   yachtmaster : {
    get: host + '/rolex/coll/yachtmaster'
   },
   seadweller : {
    get: host + '/rolex/coll/seadweller'
   },
   deepsea : {
    get: host + '/rolex/coll/deepsea'
   },
   airking: {
    get: host + '/rolex/coll/airking'
   },
   explorer: {
    get: host + '/rolex/coll/explorer'
   },
   adydatejust: {
    get: host + '/rolex/coll/adydatejust'
   },
   skydweller: {
    get: host + '/rolex/coll/skydweller'
   },
   '1908': {
    get: host + '/rolex/coll/1908'
   }
  }
 },
 descrip: (coll: any, idm: any)=>{
  return host + '/' + coll + '/' + idm
 }
}









