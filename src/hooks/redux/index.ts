import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Dispatch, RootState } from "../../redux/store";

export const useAppDispatch: () => Dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
