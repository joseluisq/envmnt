var N=null,E="",T="t",U="u",searchIndex={};
var R=["envmnt","osstr","string","asref","Returns false if environment variable value if falsy. The…","option","Sets the provided string vector as an environment variable.","Returns the requested environment variable as a string…","Sets all the provided env key/value pairs.","indexmap","envmnterror","Parses the provided env file and loads all environment…"];

searchIndex["envmnt"]={"doc":R[0],"i":[[5,"exists",R[0],"Returns true environment variable is defined.",N,[[[R[3],[R[1]]],[R[1]]],["bool"]]],[5,"remove",E,"Removes the provided environment variable.",N,[[[R[3],[R[1]]],[R[1]]]]],[5,"get_remove",E,"Removes the provided environment variable and returns its…",N,[[[R[3],[R[1]]],[R[1]]],[[R[5],[R[2]]],[R[2]]]]],[5,"get_or",E,"Returns the environment variable value or if is not…",N,[[[R[3],[R[1]]],[R[1]],["str"]],[R[2]]]],[5,"get_or_panic",E,"Returns the environment variable value. If the variable is…",N,[[[R[3],[R[1]]],[R[1]]],[R[2]]]],[5,"is_or",E,R[4],N,[[[R[3],[R[1]]],[R[1]],["bool"]],["bool"]]],[5,"is",E,R[4],N,[[[R[3],[R[1]]],[R[1]]],["bool"]]],[5,"set",E,"Sets the environment variable value.",N,[[[R[3],[R[1]]],[R[1]]]]],[5,"set_bool",E,"Sets the environment variable with a true/false value as…",N,[[[R[3],[R[1]]],[R[1]],["bool"]]]],[5,"set_optional",E,"Sets the environment variable if the provided option…",N,[[[R[3],[R[1]]],[R[1]],[R[5]]],["bool"]]],[5,"get_set",E,"Sets the environment variable value and returns the…",N,[[[R[3],[R[1]]],[R[1]]],[[R[5],[R[2]]],[R[2]]]]],[5,"vars",E,"Returns all environment variables as a vector.",N,[[],["vec"]]],[5,"is_equal",E,"Returns true if the provided environment variable is…",N,[[[R[3],[R[1]]],[R[1]],["str"]],["bool"]]],[5,"set_list",E,R[6],N,[[[R[3],[R[1]]],[R[1]],["vec"]]]],[5,"get_list",E,R[7],N,[[[R[3],[R[1]]],[R[1]]],[[R[5],["vec"]],["vec",[R[2]]]]]],[5,"set_list_with_separator",E,R[6],N,[[["vec"],[R[1]],[R[3],[R[1]]],["str"]]]],[5,"get_list_with_separator",E,R[7],N,[[[R[3],[R[1]]],[R[1]],["str"]],[[R[5],["vec"]],["vec",[R[2]]]]]],[5,"set_all",E,R[8],N,[[[R[9]]]]],[5,"evaluate_and_set_all",E,R[8],N,[[[R[9]],["f"]]]],[5,"is_any_exists",E,"Returns true if any of environment variables is defined.",N,[[["vec"]],["bool"]]],[5,"is_all_exists",E,"Returns true if all of environment variables are defined.",N,[[["vec"]],["bool"]]],[5,"load_file",E,R[11],N,[[["str"]],[["result",[R[10]]],[R[10]]]]],[5,"evaluate_and_load_file",E,R[11],N,[[["f"],["str"]],[["result",[R[10]]],[R[10]]]]],[5,"parse_file",E,"Parses the provided env file and returns its content as a…",N,[[["str"]],[[R[9],[R[2],R[2]]],[R[10]],["result",[R[9],R[10]]]]]]],"p":[]};
initSearch(searchIndex);addSearchOptions(searchIndex);