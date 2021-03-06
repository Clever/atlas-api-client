package models

func (o BadRequest) Error() string {
	return o.Message
}

func (o Conflict) Error() string {
	return o.Message
}

func (o Forbidden) Error() string {
	return o.Message
}

func (o InternalError) Error() string {
	return o.Message
}

func (o NotFound) Error() string {
	return o.Message
}

func (o TooManyRequests) Error() string {
	return o.Message
}

func (o Unauthorized) Error() string {
	return o.Message
}
