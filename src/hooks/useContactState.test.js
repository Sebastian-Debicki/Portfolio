import { renderHook, act } from '@testing-library/react-hooks';
import useContactState from './useContactState';

describe('useContactState', () => {
  it('should change emailValue state', () => {
    const { result } = renderHook(() => useContactState());
    act(() => result.current.changeEmailInputHandler({ target: { value: 'email@email.com' } }));
    expect(result.current.emailValue).toEqual('email@email.com');
  });

  it('should change nameValue state', () => {
    const { result } = renderHook(() => useContactState());
    act(() => result.current.changeNameInputHandler({ target: { value: 'some-name' } }));
    expect(result.current.nameValue).toEqual('some-name');
  });

  it('should change titleValue state', () => {
    const { result } = renderHook(() => useContactState());
    act(() => result.current.changeTitleInputHandler({ target: { value: 'some-title' } }));
    expect(result.current.titleValue).toEqual('some-title');
  });

  it('should change messageValue state', () => {
    const { result } = renderHook(() => useContactState());
    act(() => result.current.changeMessageInputHandler({ target: { value: 'some-message' } }));
    expect(result.current.messageValue).toEqual('some-message');
  });

  it('should clean emailValue, nameValue, titleValue, messageValue state', () => {
    const { result } = renderHook(() => useContactState());
    act(() => result.current.changeEmailInputHandler({ target: { value: 'email@email.com' } }));
    act(() => result.current.changeNameInputHandler({ target: { value: 'some-name' } }));
    act(() => result.current.changeTitleInputHandler({ target: { value: 'some-title' } }));
    act(() => result.current.changeMessageInputHandler({ target: { value: 'some-message' } }));
    act(() => result.current.formSubmitionHandler({ preventDefault: () => {} }));

    expect(result.current.emailValue).toEqual('');
    expect(result.current.nameValue).toEqual('');
    expect(result.current.titleValue).toEqual('');
    expect(result.current.messageValue).toEqual('');
  });
});
