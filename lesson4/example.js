// vo App.js

<Person name="Jane" course="Semos" />

// vo Person.js

function Person(props) {
	return (
		<div>
			{props.name} posetuva kurs vo {props.course}
		</div>
	)
}