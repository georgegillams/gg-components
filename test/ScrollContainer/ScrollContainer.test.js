import { cleanRestScrollProps } from '../../src/ScrollContainer';

describe('ScrollContainer', () => {
  it('should clean rest props correctly', () => {
    const rest = {
      fullyInView: false,
      hasBeenFullyInView: false,
      hasBeenInView: false,
      hasBeenJustInView: false,
      hasBeenMostlyInView: false,
      hasBeenOutOfView: false,
      inView: false,
      justInView: false,
      mostlyInView: false,
      outOfView: false,
      scrollPosition: 12,
      scrollPositionVh: 10,
      nonClearableProp: 'asdf',
    };
    cleanRestScrollProps(rest);
    expect(rest).toMatchSnapshot();
  });
});
