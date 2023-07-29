import cls from 'classnames'
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai'
import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination'
import styled from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 5px 10px;
  transition: background-color 0.2s ease-in;
  border-radius: 3px;
  color: ${(props) => props.theme.text};

  &:hover {
    background-color: #e0e0e0;
  }

  &.light {
    font-weight: normal;
  }
  .icon1 {
    transform: translateY(4px);
  }

  &.active {
    font-weight: bold;
    color: ${(props) => props.theme.pageTextActive};
  }
`
const ICON_SIZE = 15

const Page = ({ value, isActive, onClick, isDisabled }: any) => (
  <Button
    className={cls({ active: isActive })}
    onClick={onClick}
    disabled={isDisabled}
  >
    {value}
  </Button>
)

const Ellipsis = ({ onClick, isDisabled }: any) => (
  <Button onClick={onClick} disabled={isDisabled}>
    ...
  </Button>
)

const FirstPageLink = ({ isActive, onClick, isDisabled }: any) => (
  <Button onClick={onClick} disabled={isDisabled}>
    <AiOutlineDoubleLeft className='icon1' size={ICON_SIZE} />
  </Button>
)

const PreviousPageLink = ({ isActive, onClick, isDisabled }: any) => (
  <Button onClick={onClick} disabled={isDisabled}>
    <AiOutlineLeft className='icon1' size={ICON_SIZE} />
  </Button>
)

const NextPageLink = ({ isActive, onClick, isDisabled }: any) => (
  <Button onClick={onClick} disabled={isDisabled}>
    <AiOutlineRight className='icon1' size={ICON_SIZE} />
  </Button>
)

const LastPageLink = ({ isActive, onClick, isDisabled }: any) => (
  <Button onClick={onClick} disabled={isDisabled}>
    <AiOutlineDoubleRight className='icon1' size={ICON_SIZE} />
  </Button>
)

const itemTypeToComponent = {
  [ITEM_TYPES.PAGE]: Page,
  [ITEM_TYPES.ELLIPSIS]: Ellipsis,
  [ITEM_TYPES.FIRST_PAGE_LINK]: FirstPageLink,
  [ITEM_TYPES.PREVIOUS_PAGE_LINK]: PreviousPageLink,
  [ITEM_TYPES.NEXT_PAGE_LINK]: NextPageLink,
  [ITEM_TYPES.LAST_PAGE_LINK]: LastPageLink,
}

const Pagination = createUltimatePagination({
  itemTypeToComponent,
})

export default Pagination
