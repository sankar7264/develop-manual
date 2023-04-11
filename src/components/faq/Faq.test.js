import { render, screen } from '@testing-library/react'
import Faq from 'src/components/faq/Faq'

const data = {
  section_title: 'FAQ Section Nam',
  section_id: 'faqsectionnam_1679911612515',
  title: 'Frequently Asked Questions',
  faq: {
    acf_fc_layout: 'faq',
    section_title: 'FAQ Section Nam',
    section_id: 'faqsectionnam_1679911612515',
    title: 'Frequently Asked Questions',
    container: [
      {
        heading: 'Tips for Visitors',
        qna: [
          {
            question: 'When is the Presidio Open?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, ma ma at ab vc',
          },
          {
            question: 'How much is the entrance fee?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, mattis massa at.',
          },
          {
            question:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, mattis massa at.',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, mattis massa at.',
          },
          {
            question: 'What can I do at the Presidio?',
            answer: 'What can I do at the Presidio?',
          },
          {
            question: 'Can I bring my Dog?',
            answer: 'Can I bring my Dog?',
          },
          {
            question: 'What is the weather like at the Presidio?',
            answer: 'What is the weather like at the Presidio?',
          },
        ],
      },
      {
        heading: 'Tips for Visitors',
        qna: [
          {
            question: 'When is the Presidio Open?',
            answer: 'When is the Presidio Open?',
          },
          {
            question: 'How much is the entrance fee?',
            answer: 'How much is the entrance fee?',
          },
          {
            question: 'How much is the entrance fee?',
            answer: 'How much is the entrance fee?',
          },
          {
            question: 'What can I do at the Presidio?',
            answer: 'What can I do at the Presidio?',
          },
        ],
      },
    ],
  },
}

const dataWithoutCategory = {
  section_title: 'FAQ Section Nam',
  section_id: 'faqsectionnam_1679911612515',
  title: 'Frequently Asked Questions',
  faq: {
    acf_fc_layout: 'faq',
    section_title: 'FAQ Section Nam',
    section_id: 'faqsectionnam_1679911612515',
    title: 'Frequently Asked Questions',
    container: [
      {
        qna: [
          {
            question: 'When is the Presidio Open?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, ma ma at ab vc',
          },
          {
            question: 'How much is the entrance fee?',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, mattis massa at.',
          },
          {
            question:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, mattis massa at.',
            answer:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cem feugiat in aliquet venenatis risus commodo, mattis massa at.',
          },
          {
            question: 'What can I do at the Presidio?',
            answer: 'What can I do at the Presidio?',
          },
          {
            question: 'Can I bring my Dog?',
            answer: 'Can I bring my Dog?',
          },
          {
            question: 'What is the weather like at the Presidio?',
            answer: 'What is the weather like at the Presidio?',
          },
        ],
      },
    ],
  },
}

describe('Faq Component', () => {
  test('renders faq component without an faq category', () => {
    render(<Faq data={dataWithoutCategory} />)

    const categoryHeading = screen.queryByRole('heading', { level: 3 })

    expect(categoryHeading).not.toBeInTheDocument()
  })

  test('renders without crashing if no data is passed', () => {
    render(<Faq />)
  })

  test('renders faq correctly', () => {
    render(<Faq data={data} />)

    const moduleHeading = screen.queryByRole('heading', { level: 2 })

    expect(moduleHeading).toBeInTheDocument()
  })
})
