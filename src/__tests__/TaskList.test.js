import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import MarkerCard from '../entities/marker/MarkerCard.vue'

test('renders TaskList component', () => {
  const screen = render(MarkerCard, {
    props: {
      marker: {
        id: '1',
        name: 'test name',
        description: 'test description',
      },
    },
  })

  screen.debug()

  expect(screen.getByText('test description')).toBeVisible()
})
