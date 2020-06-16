import { renderHook, act } from '@testing-library/react-hooks';
import useAppState from './useAppState';
import { projects } from '../data/testsDummyData';

describe('useAppState', () => {
  it('should toggle menuOpen state from false to true', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.toggleMenuHandler());
    expect(result.current.menuOpen).toEqual(true);
  });

  it('should toggle menuOpen state from true to false when function runs second time', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.toggleMenuHandler());
    act(() => result.current.toggleMenuHandler());
    expect(result.current.menuOpen).toEqual(false);
  });

  it('should change menuOpen state from true to false', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.toggleMenuHandler());
    act(() => result.current.closeMenuHandler());
    expect(result.current.menuOpen).toEqual(false);
  });

  it('should change modalOpen state from false to true', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.openModalHandler());
    expect(result.current.modalOpen).toEqual(true);
  });

  it('should have project state', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.openModalHandler(projects[0]));
    expect(result.current.project).toEqual(projects[0]);
  });

  it('should change modalOpen state from true to false', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.openModalHandler());
    act(() => result.current.closeModalHandler());
    expect(result.current.modalOpen).toEqual(false);
  });

  it('should clean project state', () => {
    const { result } = renderHook(() => useAppState());
    act(() => result.current.openModalHandler(projects[0]));
    act(() => result.current.closeModalHandler());
    expect(result.current.project).toEqual(null);
  });
});
