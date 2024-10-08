// 书写属性相关的API文件
import request from '@/utils/request'
// 引入ts类型
import type { CategoryResponseData, AttrResponseData, Attr } from './type'
// 属性管理模块接口地址
enum API {
  // 一级分类地址
  C1_URL = '/admin/product/getCategory1',
  // 读取二级分类地址
  C2_URL = '/admin/product/getCategory2/',
  // 读取二级分类地址
  C3_URL = '/admin/product/getCategory3/',
  // 获取分类下已有的属性与属性值
  ATTR_URL = '/admin/product/attrInfoList/',
  // 添加或者修改已有的属性的接口
  ADDORUPDATEATTR_URL = '/admin/product/saveAttrInfo',
  // 添加某一个已有的属性
  DELETEATTR_URL = '/admin/product/deleteAttr/',
}

// 获取一级分类的接口方法
export const reqC1 = () => request.get<any, CategoryResponseData>(API.C1_URL)
// 获取二级分类的接口方法
export const reqC2 = (category1Id: number | string) =>
  request.get<any, CategoryResponseData>(API.C2_URL + category1Id)
// 获取二级分类的接口方法
export const reqC3 = (category2Id: number | string) =>
  request.get<any, CategoryResponseData>(API.C3_URL + category2Id)
// 获取对应分类下已有的属性与属性值接口
export const reqAttr = (
  category1Id: number | string,
  category2Id: number | string,
  category3Id: number | string,
) =>
  request.get<any, AttrResponseData>(
    API.ATTR_URL + `${category1Id}/${category2Id}/${category3Id}`,
  )

// 新增或者修改已有的属性接口
export const reqAddorUpdateAttr = (data: Attr) =>
  request.post<any, any>(API.ADDORUPDATEATTR_URL, data)

// 删除某一个已有的业务
export const reqRemoveAttr = (attrId: number) =>
  request.delete<any, any>(API.DELETEATTR_URL + attrId)
