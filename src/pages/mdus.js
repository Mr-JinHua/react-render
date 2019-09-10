let mymd = `# 新增凭证
## 1.接口说明
新增凭证
## 2.使用场景
新增凭证
## 3.接口调用说明

### 3.1请求类型 
post

### 3.2请求示例							
> http://ip:port/nccloud/api/gl/voucher/insert

### 3.3请求URL参数说明
|参数|类型|是否必填|描述|
|------|------|------|:-----|
|accbookCode|string|是|核算账簿编码|
|prepareddate|String|是|制单日期，yyyy-MM-dd|
|year|String|是|会计年度|
|period|String|是|会计期间|
|vouchertype|String|是|凭证类别编码|
|prepared|String|是|制单人编码|
|num|int|是|凭证号|
|attachment|int|否|附单据数|
|detail|DetailVO[]|是|分录信息|

分录信息 DetailVO

| 参数                   | 类型             | 是否必填 | 描述                 |
| ---------------------- | ---------------- | -------- | -------------------- |
| detailindex            | int              | 是       | 分录号               |
| unitCode               | String           | 否       | 业务单元编码         |
| explanation            | String           | 是       | 摘要                 |
| accountCode            | String           | 是       | 科目编码             |
| currtypeCode           | String           | 是       | 币种编码             |
| quantity               | double           | 否       | 数量                 |
| amount                 | double           | 是       | 原币金额             |
| localdebitamount       | double           | 是       | 组织本币借方金额     |
| localcreditamount      | double           | 是       | 组织本币贷方金额     |
| groupdebitamount       | double           | 是       | 集团本币借方金额     |
| groupcreditamount      | double           | 是       | 集团本币贷方金额     |
| globaldebitamount      | double           | 是       | 全局本币借方金额     |
| globalcreditamount     | double           | 是       | 全局本币贷方金额     |
| locRate                | double           | 否       | 组织本币汇率         |
| groupRate              | double           | 否       | 集团本币汇率         |
| globalRate             | double           | 否       | 全局本币汇率         |
| price                  | double           | 否       | 单价                 |
| busidate               | String           | 是       | 业务日期             |
| freevalue1-freevalue30 | String           | 否       | 自定义项1-自定义项30 |
| ass                    | AssVO[]          | 否       | 辅助核算             |
| cashflow               | CashflowcaseVO[] | 否       | 现金流量             |

辅助核算 AssVO`

export default mymd;