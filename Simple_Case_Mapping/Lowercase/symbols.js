module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))