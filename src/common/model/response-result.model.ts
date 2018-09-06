/**
 * Created by guanyj on  2018/9/6
 * http请求返回结果模型
 */

export class ResponseResult<T = any> {

    /**
     * 返回数据
     */
    data: T;

    /**
     * 错误码
     */
    errorCode: string;

    /**
     * 错误等级
     */
    errorLevel: string;

    /**
     * 错误消息
     */
    errorMsg: string;

    /**
     * 操作是否成功
     */
    success: boolean;
}
