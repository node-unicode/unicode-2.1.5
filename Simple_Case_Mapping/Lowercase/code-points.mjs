import { brotliDecompressSync } from 'node:zlib';
import decodeMapping from '../../decode-mapping.mjs';

export default decodeMapping(brotliDecompressSync(Buffer.from('H5EJAES//KusDq4zmXzo4Ap6u0ccfz/13o9eWemwQZtgTQOKaKAUiOaJRbqPdbTZBrbZsHx38ftdiMMbo1Hy9p5woHs95AnmlT2DEwjqcyEQQrOC0N5qHn6snRjnIw/BbVg7r4jGDOF3xHk8No1Gdj46tzzBuGy9C+cnD1o4V12cuT8xkAvVz4jBPkRQfch3V4UQyXxw7nkYXC4UpZQLHjJX4jXr3YTej9n3SdkZ3ihIOB/WgVbpPCjzuBkoCEF4DKkNNCUe/zTuD2eU6m81bpeG/y6/Wx2UwfzWRQ7N0CMMTXDx6eq+YzCPS/rcuQT7p+pP836EPgdz+AcLg7lmDxEnVzPxPWsUcxwWJDr+NXjEMONn/666sCrpFZrr4fGjBg==', 'base64')).toString());
