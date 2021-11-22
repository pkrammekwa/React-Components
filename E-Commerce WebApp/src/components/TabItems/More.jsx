import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    margin-top: -10px;
`;
const Title = styled.h1`
    text-align: center;
    font-style: italic;
`;
const Body = styled.p`

`;

export const More = () => {
    return (
        <Container>
            <Title>product Name</Title>
            <Body>In this chapter we will investigate several different memory management mod-
els,  ranging  from  very  simple  to  highly  sophisticated.  Since  managing  the  lowest

level of cache memory is normally done by the hardware, the focus of this chapter

will be on the programmer’s model of main memory and how it can be managed.

The  abstractions  for, and  the  management  of,  permanent  storage—the  disk—are

the subject of the next chapter. We will first look at the simplest possible schemes

and then gradually progress to more and more elaborate ones.
3.1  NO MEMORY ABSTRACTION
The  simplest  memory  abstraction  is  to  have  no abstraction  at  all.  Early  main-
frame computers (before 1960), early minicomputers (before 1970), and early per-

sonal computers (before 1980) had no memory abstraction. Every program simply

saw the physical memory. When a program executed an instruction like
MOV REGISTER1,1000
the computer just moved the contents of physical memory location 1000 to REGIS-
TER1. Thus, the model of memory presented to the programmer was simply phys-
ical  memory, a set  of  addresses  from  0  to  some  maximum,  each  address  corres-

ponding to a cell containing some number of bits, commonly eight.
Under  these  conditions,  it  was  not  possible  to  have  two  running  programs  in
memory at the same time. If the first program wrote a new value to, say, location

2000, this would erase whatever value the second program was storing there. Noth-

ing would work and both programs would crash almost immediately.
Even  with  the  model  of  memory  being  just  physical  memory, sev eral  options
are possible. Three variations are shown in Fig. 3-1.  The operating system may be

at  the  bottom  of  memory  in  RAM  (Random  Access  Memory),  as  shown  in

Fig. 3-1(a), or  it  may  be  in  ROM  (Read-Only  Memory)  at  the  top  of  memory, as

shown in Fig. 3-1(b), or the device drivers may be at the top of memory in a ROM

and the rest of the system in RAM down below,  as shown in Fig. 3-1(c).  The first

model was formerly used on mainframes and minicomputers but is rarely used any

more. The second model is used on some handheld computers and embedded sys-

tems. The third  model  was  used  by  early  personal  computers  (e.g.,  running  MS-

DOS), where the portion of the system in the ROM is called the BIOS (Basic Input
Output  System). Models  (a)  and  (c)  have  the  disadvantage  that  a  bug  in  the  user

program can wipe out the operating system, possibly with disastrous results.
When the system is organized in this way, generally only one process at a time
can be running. As soon as the user types a command, the operating system copies

the requested program from disk to memory and executes it. When the process fin-

ishes,  the  operating  system  displays  a  prompt  character  and  waits  for  a  user  new

command.  When  the  operating  system  receives the  command,  it  loads  a  new pro-

gram into memory, overwriting the first one</Body>
        </Container>
    )
}
