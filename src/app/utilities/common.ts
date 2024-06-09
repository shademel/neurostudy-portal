export const debounce = (fn: Function, threshold: number = 500, context: any = null) => {
  let timer: any
  return function (...args: any[]) {
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, threshold)
  }
}

export const throttle = (fn: Function, threshold: number = 500, context: any = null) => {
  let last: number = -1, timer: any

  return function (...args: any[]) {
    let now = Date.now()

    if (last && now < last + threshold) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}