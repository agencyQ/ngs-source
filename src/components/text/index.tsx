import { cva } from "class-variance-authority";
import { cn } from "drupal-canvas";

const textVariants = cva('my-8', {
  variants: {
    textColor: {
      Dark: 'text-black',
      Light: 'text-white',
    },
    textSize: {
      'Extra Small': 'text-xs',
      Small: 'text-sm',
      Normal: 'text-base/6',
      Large: 'text-lg/8',
      'Extra Large': 'text-xl/8',
    },
  },
})


const NewlineText = ({ text }) =>
  text.split('\n').map(newLine => <p className="mb-2">{newLine}</p>);

const Text = ({ text, textSize, textColor, className }) => {
  return (
    <p className={cn(textVariants({ textColor, textSize }), className)}>
      <NewlineText text={text} />
    </p>
  )
}

export default Text;