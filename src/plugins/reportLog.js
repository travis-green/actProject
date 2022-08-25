import axios from 'axios'
import qs from 'qs'

const url = window.g_info.reportLogs

export function customReportLogs(json, deviceId) {
  if (url) {
    return axios.post(
            url + '/log/report',
            qs.stringify({
              type: 'custom',
              deviceId,
              customType: 'mobildGatewayError',
              appId: '1603887139263',
              appKey: 'QTSHE_WECHAT',
              json: JSON.stringify(json)
            })
        )
  }
}
