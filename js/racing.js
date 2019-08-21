// Return the top 7 for any given year and any given lap number. 

function changeColor() {
    $('body').css('background-color', "blue")
}

function dataChange() {
    let year = $("#submit-form input[name=year]").val()
    let lap = $("#submit-form input[name=lap").val()

    $.get("https://ergast.com/api/f1/" + year + "/" + lap + "/driverStandings.json", function ( data ){
        console.log(data)
        // driver position
        let pos1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        let pos2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        let pos3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        let pos4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        let pos5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        let pos6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        let pos7 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].position
        $('#DriverPos1').text(pos1)
        $('#DriverPos2').text(pos2)
        $('#DriverPos3').text(pos3)
        $('#DriverPos4').text(pos4)
        $('#DriverPos5').text(pos5)
        $('#DriverPos6').text(pos6)
        $('#DriverPos7').text(pos7)

        // driver first name
        let name1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
        let name2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName
        let name3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.givenName
        let name4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.givenName
        let name5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.givenName
        let name6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.givenName
        let name7 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.givenName
        $('#DriverName1').text(name1)
        $('#DriverName2').text(name2)
        $('#DriverName3').text(name3)
        $('#DriverName4').text(name4)
        $('#DriverName5').text(name5)
        $('#DriverName6').text(name6)
        $('#DriverName7').text(name7)

        // driver nationality
        let nat1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.nationality
        let nat2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.nationality
        let nat3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Driver.nationality
        let nat4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Driver.nationality
        let nat5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Driver.nationality
        let nat6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Driver.nationality
        let nat7 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Driver.nationality
        $('#DriverNat1').text(nat1)
        $('#DriverNat2').text(nat2)
        $('#DriverNat3').text(nat3)
        $('#DriverNat4').text(nat4)
        $('#DriverNat5').text(nat5)
        $('#DriverNat6').text(nat6)
        $('#DriverNat7').text(nat7)
        // driver sponsor
        let spon1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Constructors[0].constructorId
        let spon2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Constructors[0].constructorId
        let spon3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].Constructors[0].constructorId
        let spon4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].Constructors[0].constructorId
        let spon5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].Constructors[0].constructorId
        let spon6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].Constructors[0].constructorId
        let spon7 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].Constructors[0].constructorId
        $('#Driverspon1').text(spon1)
        $('#Driverspon2').text(spon2)
        $('#Driverspon3').text(spon3)
        $('#Driverspon4').text(spon4)
        $('#Driverspon5').text(spon5)
        $('#Driverspon6').text(spon6)
        $('#Driverspon7').text(spon7)

        // driver points
        let point1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].points
        let point2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].points
        let point3 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[2].points
        let point4 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[3].points
        let point5 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[4].points
        let point6 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[5].points
        let point7 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[6].points
        $('#Driverspoint1').text(point1)
        $('#Driverspoint2').text(point2)
        $('#Driverspoint3').text(point3)
        $('#Driverspoint4').text(point4)
        $('#Driverspoint5').text(point5)
        $('#Driverspoint6').text(point6)
        $('#Driverspoint7').text(point7)

    })
}



// this works
// $.get("https://ergast.com/api/f1/" + year + "/" + lap + "/driverStandings.json", function ( data ){
//         console.log(data)
//         let name1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
//         let name2 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[1].Driver.givenName
//         $('#DriverName1').text(name1)
//         $('#DriverName2').text(name2)

// loop attempts for the dataChange() function
// $.get("https://ergast.com/api/f1/" + year + "/" + lap + "/driverStandings.json", function ( data ){
//        console.log(data)
// for(let i=0; i<8; i++){
//     var DriverName = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[i].Driver.givenName
//     $('#DriverName[i]').text(DriverName[i])
// }
// let name1 = data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.givenName
