<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DEMO JS4</title> 
</head>
<body>
    <input  onkeydown="demo1(this)" onkeyup="demo2(this)" type="text" name="fullname" placeholder="Enter.."/>
    <input  onkeydown="demo1(this)" onkeyup="demo2(this)" type="text" name="email" placeholder="Enter.."/>
    <select id="slct" onchange="demo3(this)">
        <option value="HN">HN</option>
        <option value="SG">SG</option>
        <option value="HP">HP</option>
        <option value="BN">BN</option>
    </select>
    <script tyle="text/javascript">
        //code here
        function demo1(e){
            console.log(e.name+":"+e.value);
        }
        function demo2(e) {
            console.log(e.name+":"+e.value);
        } 
        function demo3(ct) {
            alert(ct.value);
        }

    </script>
    
</body>
</html>