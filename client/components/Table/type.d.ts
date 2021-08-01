interface ITablePropsColumn {
  key: string
  label: string
}

interface ITablePropsAction {
  type: string
  label: string
  onClick: any
}

type TableProps = {
  columns: ITablePropsColumn[]
  records?: Record<string, any>[]
  actions?: ITablePropsAction[]
}
