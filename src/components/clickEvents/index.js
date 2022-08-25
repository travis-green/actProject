/* eslint-disable */
import { clickEvents, exposureEvents } from '../../lib/ptp_3.0'
export default {
    install: function (Vue, options) {
        Vue.directive('clickEvents', {
            bind: function (el, binding) {
                el.addEventListener('click', (e) => {
                    // e.stopPropagation()
                    clickEvents(binding.value)
                })
                var io = new IntersectionObserver(entries => {
                    if (entries[0].intersectionRatio > 0) {
                        exposureEvents(binding.value)
                    }
                })
                io.observe(el)
            },
            update: function (el, oldValue) {
            },
            unbind: function (el) {
            }
        })
    }
}
