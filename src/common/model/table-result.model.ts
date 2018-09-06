/**
 * Created by guanyj on  2018/9/6
 * 表格结果集数据模型
 */

export class TableResult<T> {

    /**
     * 分页尺寸
     */
    pageSize: number;

    /**
     * 当前页码
     */
    pageNum: number;

    /**
     * 总条数
     */
    totalCount: number;

    /**
     * 表格数据
     */
    data: T[];
}
