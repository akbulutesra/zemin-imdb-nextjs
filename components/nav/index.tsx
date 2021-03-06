import Link from 'next/link'
import Container from '@/components/container'

export default function Nav({ title = 'Entries' }) {
  return (
    <Container className="py-4">
      <nav>
        <h1 className="flex justify-between items-center">
          IMDB Rating List
        </h1>
      </nav>
    </Container>
  )
}
