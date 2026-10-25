import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('HwwJAERBOc934JlmGahihM//vdP7931/eMen8BbI2+BjgkygTh7tdTwwyrkAs4cNm1cXbaZXUcbMSB8Iu6BnDbUNdleVIfwEY/znpmBQiCoUkqsSD4jrsDSNEmr3DZhWLioojOX5GqBW6c3Uikn4rWDqLAernX/IJXAKtFxLjAkpXfYrHBe4rdBRHGsoKFfeN+JfgcSXaIRHLxG4Ks1yhgW74AGyXHVQsxDT5LfELW+5r+6zcoey/65bl4FdkNIl+D1b8g9quiTWwujd10pAJQHaUBr/NKEFt6f+Xf65GIy4X4OL4tWNkLKBFtGJwL0H2bPHMKqLZ17Z9j1qhIcbSu4BXrBq5qiFE47HRoSOteisRNs9shIaG3TuKexpPvtn5WH/lHdIrDufjxM=', 'base64')).toString());
