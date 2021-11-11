import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { Dropdown, Menu } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import Flex from 'a';

const TableFilter: React.FC<{
  /**
   * @description 选项列表
   */
  filterList: {
    value: string | number;
    text: string;
  }[];
  /**
   * @description 选中之后的回调
   */
  onFilter: (filteredValue: string) => void;
}> = ({ filterList, onFilter }) => {
  const opRef = useRef(null);
  const [filteredValue, setFilteredValue] = useState<string[]>([]);
  const onSelect = useCallback(
    ({ key, keyPath }) => {
      let arr = keyPath || [];
      if (key === 'all') {
        arr = [];
      }
      if (!filteredValue.length || filteredValue[0] !== key) {
        onFilter(arr[0]);
      }
      setFilteredValue(arr);
    },
    [filteredValue],
  );
  return filterList?.length > 1 ? (
    <Dropdown
      placement="bottomRight"
      getPopupContainer={() => opRef.current || document.body}
      overlay={
        <Menu
          selectable
          selectedKeys={filteredValue}
          onClick={onSelect}
          style={{ minWidth: 88 }}
        >
          {[
            {
              value: 'all',
              text: '全部',
            },
            ...filterList,
          ].map((item) => (
            <Menu.Item key={item.value}>
              <div
                style={{
                  padding: '0 4px',
                  fontFamily: 'normal',
                  fontWeight: 'normal',
                }}
              >
                {item.text}
              </div>
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <div style={{ width: 12, height: '100%' }} ref={opRef}>
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ width: 23, height: 30, marginLeft: -6 }}
        >
          <FilterFilled
            style={{ color: filteredValue.length ? '#1890ff' : undefined }}
          />
        </Flex>
      </div>
    </Dropdown>
  ) : null;
};

export default TableFilter;
