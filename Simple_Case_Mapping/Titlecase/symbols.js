module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))