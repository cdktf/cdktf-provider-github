# `github_team`

Refer to the Terraform Registory for docs: [`github_team`](https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team).

# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-github.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-github.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team github_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.team.Team.Initializer"></a>

```python
from cdktf_cdktf_provider_github import team

team.Team(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  create_default_maintainer: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  ldap_dn: str = None,
  parent_team_id: str = None,
  parent_team_read_id: str = None,
  parent_team_read_slug: str = None,
  privacy: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the team. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.createDefaultMaintainer">create_default_maintainer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Adds a default maintainer to the team. Adds the creating user to the team when 'true'. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the team. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.ldapDn">ldap_dn</a></code> | <code>str</code> | The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.parentTeamId">parent_team_id</a></code> | <code>str</code> | The ID or slug of the parent team, if this is a nested team. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.parentTeamReadId">parent_team_read_id</a></code> | <code>str</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.parentTeamReadSlug">parent_team_read_slug</a></code> | <code>str</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.Team.Initializer.parameter.privacy">privacy</a></code> | <code>str</code> | The level of privacy for the team. Must be one of 'secret' or 'closed'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.team.Team.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.team.Team.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.team.Team.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.team.Team.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.team.Team.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.team.Team.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.Team.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.team.Team.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.team.Team.Initializer.parameter.name"></a>

- *Type:* str

The name of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#name Team#name}

---

##### `create_default_maintainer`<sup>Optional</sup> <a name="create_default_maintainer" id="@cdktf/provider-github.team.Team.Initializer.parameter.createDefaultMaintainer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds a default maintainer to the team. Adds the creating user to the team when 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.team.Team.Initializer.parameter.description"></a>

- *Type:* str

A description of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#description Team#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.team.Team.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldap_dn`<sup>Optional</sup> <a name="ldap_dn" id="@cdktf/provider-github.team.Team.Initializer.parameter.ldapDn"></a>

- *Type:* str

The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#ldap_dn Team#ldap_dn}

---

##### `parent_team_id`<sup>Optional</sup> <a name="parent_team_id" id="@cdktf/provider-github.team.Team.Initializer.parameter.parentTeamId"></a>

- *Type:* str

The ID or slug of the parent team, if this is a nested team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#parent_team_id Team#parent_team_id}

---

##### `parent_team_read_id`<sup>Optional</sup> <a name="parent_team_read_id" id="@cdktf/provider-github.team.Team.Initializer.parameter.parentTeamReadId"></a>

- *Type:* str

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#parent_team_read_id Team#parent_team_read_id}

---

##### `parent_team_read_slug`<sup>Optional</sup> <a name="parent_team_read_slug" id="@cdktf/provider-github.team.Team.Initializer.parameter.parentTeamReadSlug"></a>

- *Type:* str

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#parent_team_read_slug Team#parent_team_read_slug}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-github.team.Team.Initializer.parameter.privacy"></a>

- *Type:* str

The level of privacy for the team. Must be one of 'secret' or 'closed'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#privacy Team#privacy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.team.Team.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.team.Team.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.team.Team.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.team.Team.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.team.Team.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer">reset_create_default_maintainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetLdapDn">reset_ldap_dn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamId">reset_parent_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadId">reset_parent_team_read_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetParentTeamReadSlug">reset_parent_team_read_slug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.resetPrivacy">reset_privacy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.team.Team.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.team.Team.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.team.Team.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.team.Team.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.team.Team.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.team.Team.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.team.Team.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.team.Team.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.team.Team.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.team.Team.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.team.Team.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.team.Team.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.team.Team.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-github.team.Team.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.Team.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.team.Team.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.team.Team.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.team.Team.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `reset_create_default_maintainer` <a name="reset_create_default_maintainer" id="@cdktf/provider-github.team.Team.resetCreateDefaultMaintainer"></a>

```python
def reset_create_default_maintainer() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-github.team.Team.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.team.Team.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ldap_dn` <a name="reset_ldap_dn" id="@cdktf/provider-github.team.Team.resetLdapDn"></a>

```python
def reset_ldap_dn() -> None
```

##### `reset_parent_team_id` <a name="reset_parent_team_id" id="@cdktf/provider-github.team.Team.resetParentTeamId"></a>

```python
def reset_parent_team_id() -> None
```

##### `reset_parent_team_read_id` <a name="reset_parent_team_read_id" id="@cdktf/provider-github.team.Team.resetParentTeamReadId"></a>

```python
def reset_parent_team_read_id() -> None
```

##### `reset_parent_team_read_slug` <a name="reset_parent_team_read_slug" id="@cdktf/provider-github.team.Team.resetParentTeamReadSlug"></a>

```python
def reset_parent_team_read_slug() -> None
```

##### `reset_privacy` <a name="reset_privacy" id="@cdktf/provider-github.team.Team.resetPrivacy"></a>

```python
def reset_privacy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.team.Team.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import team

team.Team.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.team.Team.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import team

team.Team.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.team.Team.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import team

team.Team.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.team.Team.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import team

team.Team.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Team to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Team that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.Team.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Team to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.team.Team.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.membersCount">members_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.slug">slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput">create_default_maintainer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDnInput">ldap_dn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamIdInput">parent_team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadIdInput">parent_team_read_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput">parent_team_read_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacyInput">privacy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.createDefaultMaintainer">create_default_maintainer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.ldapDn">ldap_dn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamId">parent_team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadId">parent_team_read_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.parentTeamReadSlug">parent_team_read_slug</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.Team.property.privacy">privacy</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.team.Team.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.team.Team.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.team.Team.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.team.Team.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.team.Team.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.team.Team.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.team.Team.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.team.Team.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.team.Team.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.team.Team.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.team.Team.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.team.Team.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.Team.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.team.Team.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.team.Team.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `members_count`<sup>Required</sup> <a name="members_count" id="@cdktf/provider-github.team.Team.property.membersCount"></a>

```python
members_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="@cdktf/provider-github.team.Team.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-github.team.Team.property.slug"></a>

```python
slug: str
```

- *Type:* str

---

##### `create_default_maintainer_input`<sup>Optional</sup> <a name="create_default_maintainer_input" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainerInput"></a>

```python
create_default_maintainer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-github.team.Team.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.team.Team.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ldap_dn_input`<sup>Optional</sup> <a name="ldap_dn_input" id="@cdktf/provider-github.team.Team.property.ldapDnInput"></a>

```python
ldap_dn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-github.team.Team.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_team_id_input`<sup>Optional</sup> <a name="parent_team_id_input" id="@cdktf/provider-github.team.Team.property.parentTeamIdInput"></a>

```python
parent_team_id_input: str
```

- *Type:* str

---

##### `parent_team_read_id_input`<sup>Optional</sup> <a name="parent_team_read_id_input" id="@cdktf/provider-github.team.Team.property.parentTeamReadIdInput"></a>

```python
parent_team_read_id_input: str
```

- *Type:* str

---

##### `parent_team_read_slug_input`<sup>Optional</sup> <a name="parent_team_read_slug_input" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlugInput"></a>

```python
parent_team_read_slug_input: str
```

- *Type:* str

---

##### `privacy_input`<sup>Optional</sup> <a name="privacy_input" id="@cdktf/provider-github.team.Team.property.privacyInput"></a>

```python
privacy_input: str
```

- *Type:* str

---

##### `create_default_maintainer`<sup>Required</sup> <a name="create_default_maintainer" id="@cdktf/provider-github.team.Team.property.createDefaultMaintainer"></a>

```python
create_default_maintainer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.team.Team.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.team.Team.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ldap_dn`<sup>Required</sup> <a name="ldap_dn" id="@cdktf/provider-github.team.Team.property.ldapDn"></a>

```python
ldap_dn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.team.Team.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_team_id`<sup>Required</sup> <a name="parent_team_id" id="@cdktf/provider-github.team.Team.property.parentTeamId"></a>

```python
parent_team_id: str
```

- *Type:* str

---

##### `parent_team_read_id`<sup>Required</sup> <a name="parent_team_read_id" id="@cdktf/provider-github.team.Team.property.parentTeamReadId"></a>

```python
parent_team_read_id: str
```

- *Type:* str

---

##### `parent_team_read_slug`<sup>Required</sup> <a name="parent_team_read_slug" id="@cdktf/provider-github.team.Team.property.parentTeamReadSlug"></a>

```python
parent_team_read_slug: str
```

- *Type:* str

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-github.team.Team.property.privacy"></a>

```python
privacy: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.Team.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.team.Team.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-github.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.team.TeamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import team

team.TeamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  create_default_maintainer: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  ldap_dn: str = None,
  parent_team_id: str = None,
  parent_team_read_id: str = None,
  parent_team_read_slug: str = None,
  privacy: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.name">name</a></code> | <code>str</code> | The name of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer">create_default_maintainer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Adds a default maintainer to the team. Adds the creating user to the team when 'true'. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.description">description</a></code> | <code>str</code> | A description of the team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.ldapDn">ldap_dn</a></code> | <code>str</code> | The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamId">parent_team_id</a></code> | <code>str</code> | The ID or slug of the parent team, if this is a nested team. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId">parent_team_read_id</a></code> | <code>str</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug">parent_team_read_slug</a></code> | <code>str</code> | The id of the parent team read in Github. |
| <code><a href="#@cdktf/provider-github.team.TeamConfig.property.privacy">privacy</a></code> | <code>str</code> | The level of privacy for the team. Must be one of 'secret' or 'closed'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.team.TeamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.team.TeamConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.team.TeamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.team.TeamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.team.TeamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.team.TeamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.team.TeamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-github.team.TeamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#name Team#name}

---

##### `create_default_maintainer`<sup>Optional</sup> <a name="create_default_maintainer" id="@cdktf/provider-github.team.TeamConfig.property.createDefaultMaintainer"></a>

```python
create_default_maintainer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Adds a default maintainer to the team. Adds the creating user to the team when 'true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#create_default_maintainer Team#create_default_maintainer}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.team.TeamConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#description Team#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.team.TeamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ldap_dn`<sup>Optional</sup> <a name="ldap_dn" id="@cdktf/provider-github.team.TeamConfig.property.ldapDn"></a>

```python
ldap_dn: str
```

- *Type:* str

The LDAP Distinguished Name of the group where membership will be synchronized. Only available in GitHub Enterprise Server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#ldap_dn Team#ldap_dn}

---

##### `parent_team_id`<sup>Optional</sup> <a name="parent_team_id" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamId"></a>

```python
parent_team_id: str
```

- *Type:* str

The ID or slug of the parent team, if this is a nested team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#parent_team_id Team#parent_team_id}

---

##### `parent_team_read_id`<sup>Optional</sup> <a name="parent_team_read_id" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadId"></a>

```python
parent_team_read_id: str
```

- *Type:* str

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#parent_team_read_id Team#parent_team_read_id}

---

##### `parent_team_read_slug`<sup>Optional</sup> <a name="parent_team_read_slug" id="@cdktf/provider-github.team.TeamConfig.property.parentTeamReadSlug"></a>

```python
parent_team_read_slug: str
```

- *Type:* str

The id of the parent team read in Github.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#parent_team_read_slug Team#parent_team_read_slug}

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-github.team.TeamConfig.property.privacy"></a>

```python
privacy: str
```

- *Type:* str

The level of privacy for the team. Must be one of 'secret' or 'closed'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/5.41.0/docs/resources/team#privacy Team#privacy}

---



