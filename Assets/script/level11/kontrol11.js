#pragma strict

function Start () {

}

function Update () {
	if(transform.position.y<60){
		
		Time.timeScale=0;
			
			Time.timeScale=1;
			Application.LoadLevel(12);

}

}