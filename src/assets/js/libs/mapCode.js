export function matchPropClass (code) {
  return {
    'TEXT': '文本',
    'DATE': '日期',
    'TIME': '时间',
    'LIST': '列表',
    'NUMBER': '数值'
  }[code]
}

export function matchPropType (code) {
  return {
    0: '情报区',
    1: '机场',
    2: '航线',
    3: '飞机',
    4: '机组',
    5: '航班'
  }[code]
}

export function matchFormula (code) {
  return {
    '>': '大于',
    '>=': '大于等于',
    '=': '等于',
    '<=': '小于等于',
    '<': '小于'
  }[code]
}

export function matchCond (code) {
  return {
    'O': '或',
    'A': '与'
  }[code] || '无'
}

export function matchExpress (code) {
  return {
    0: '只能飞',
    1: '不能飞',
    2: '只能由',
    3: '不能由'
  }[code]
}

export function matchMod (code) {
  return {
    'FLT': '计划', // 0
    'PPC': '机务', // 3
    'DSP': '放行', // 2
    'ADJ': '调整'// 1
  }[code]
}

export function matchEx (code) {
  return {
    '1': '强',
    '0': '提示'
  }[code]
}
