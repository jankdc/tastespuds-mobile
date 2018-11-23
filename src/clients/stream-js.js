import * as streamjs from 'getstream'
import { STREAMJS_APP_ID, STREAMJS_API_KEY } from 'react-native-dotenv'

const client = streamjs.connect(STREAMJS_API_KEY, null, STREAMJS_APP_ID)

export default client
