interface ITablePropsColumn {
  key: string
  label: string
  value?: string
  type?: string
}

interface ITablePropsAction {
  type: string
  label: string
  onClick: any
}

type TableProps = {
  isLoading?: boolean
  columns: ITablePropsColumn[]
  records?: Record<string, any>[]
  actions?: ITablePropsAction[]
}
