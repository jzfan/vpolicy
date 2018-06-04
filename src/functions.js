import bus from './bus'

function flash(msg)
{
	bus.$emit('flash', msg)
}

export {
	flash
}