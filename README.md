# React useEffect and Cleanup Function Flow

## Step-by-Step Breakdown

### 1. Initial Render:
- The component mounts.
- The useState hooks initialize `show` and `debounce` states with empty strings.
- The useEffect hook runs for the first time.
- A timer is set with setTimeout for 700ms.
- The cleanup function is created but not yet executed.

### 2. User Interaction:
- User types into the input field.
- The `show` state updates with each keystroke.

### 3. Re-render and useEffect Execution:
- Every time `show` changes, the component re-renders.
- Before the new useEffect runs, the cleanup function from the previous render is executed.
  - This clears the previous timeout to prevent unnecessary state updates.
- A new timer is set with the updated `show` value.

### 4. Debounce Update:
- If no new keystrokes occur within 700ms, the timer completes.
- `setDebounce(show)` is called, updating the `debounce` state.
- The component re-renders to display the new `debounce` value.

### 5. Component Unmount:
- When the component unmounts, React calls the cleanup function one last time.
- This ensures any remaining timeout is cleared, preventing memory leaks.

## Summary Flow:
1. Mount: useEffect runs, sets timer
2. Update: Cleanup runs (clears old timer), useEffect runs again (sets new timer)
3. Unmount: Final cleanup runs

## Importance of the Cleanup Function:
- It prevents multiple timers from running simultaneously.
- It ensures that only the most recent user input is processed after the delay.
- It prevents potential memory leaks by clearing the timeout when the component unmounts.
