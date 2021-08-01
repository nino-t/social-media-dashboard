interface IColumn {
  key: string
  label: string
}

type TableProps = {
  columns: IColumn[]
  records?: Record<string, any>[]
}
