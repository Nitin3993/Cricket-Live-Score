const socket = io();
let sports = {};
socket.on('connect',()=>{
    console.log("socket created  "+ socket.id)
})

socket.on('match', (data)=>{    
    console.log(data.Current)

    $('.series').text(data.Current.series)
    $('.teams').text(`${data.Current.teams['4'].name} vs ${data.Current.teams['5'].name} `)
    $('#para1').text(`State : ${data.Current.state}`)
    $('#para2').text(`${data.Current.status}`)
    $('.cric').append(
    $('<li>').attr('class','list-group-item').text(`${data.Current.score.detail.batting.shortName} : ${data.Current.score.detail.batting.score}/${data.Current.score.detail.batting.wickets}`)).append(
    $('<li>').attr('class','list-group-item').text(`overs : ${data.Current.score.detail.batting.overs}`)
    ).append(
    $('<li>').attr('class','list-group-item').text(`Partnership: ${data.Current.score.partnership}`)).append(
    $('<li>').attr('class','list-group-item').text(`Run Rate : ${data.Current.score.runRate}`)
    ).append(
    $('<li>').attr('class','list-group-item').text(`Previous Overs : ${data.Current.score.prevOvers}`)
    )
    $('.bat').append(
        $('<li>').attr('class','list-group-item').text(`${data.Current.score.batsmen["0"].name} * : Runs : ${data.Current.score.batsmen["0"].r} Balls : ${data.Current.score.batsmen["0"].b}`)).append(
        $('<li>').attr('class','list-group-item').text(`${data.Current.score.batsmen["1"].name} : Runs : ${data.Current.score.batsmen["1"].r} Balls : ${data.Current.score.batsmen["1"].b}`)
    )
    $('.ball').append(
        $('<li>').attr('class','list-group-item').text(`${data.Current.score.bowlers["0"].name} * : Overs : ${data.Current.score.bowlers["0"].o} Runs : ${data.Current.score.bowlers["0"].r} Wickets : ${data.Current.score.bowlers["0"].w}`)).append(
        $('<li>').attr('class','list-group-item').text(`${data.Current.score.bowlers["1"].name} : Overs : ${data.Current.score.bowlers["1"].o} Runs : ${data.Current.score.bowlers["1"].r} Wickets : ${data.Current.score.bowlers["1"].w}`)
    )
})