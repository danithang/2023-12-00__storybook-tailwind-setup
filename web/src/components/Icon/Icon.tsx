// getting id from the args object and passing it to the Icon component. This is a common pattern in Storybook - you can read more about it here: https://storybook.js.org/docs/react/essentials/args#args-in-story-files
const Icon = ({ id, size = 24 }) => {
  return (
    <svg width={size} height={size}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
