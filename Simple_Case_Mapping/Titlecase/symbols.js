module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))