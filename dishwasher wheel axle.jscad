function main() {
 return difference(
  union(
   difference(
    cylinder({h: 14.5, r:4.44, center:true}),
    cylinder({h: 14.5, r:2.0, center:true})
    ),
   difference(
    cylinder({h:2.5, r: 6.5}).translate([0,0,-7]),
    cylinder({h:2.5, r: 1.5}).translate([0,0,-7])
    )
   ),
  union(
    cube({size: [5,2,3]}).translate([-2.5,5,-7]),
    cube({size: [5,2,3]}).translate([-2.5,-7,-7])
 ) ).translate([0,0,7])

;
}
