# `teamSyncGroupMapping` Submodule <a name="`teamSyncGroupMapping` Submodule" id="@cdktf/provider-github.teamSyncGroupMapping"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamSyncGroupMapping <a name="TeamSyncGroupMapping" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping github_team_sync_group_mapping}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMapping(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  team_slug: str,
  group: typing.Union[IResolvable, typing.List[TeamSyncGroupMappingGroup]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.teamSlug">team_slug</a></code> | <code>str</code> | Slug of the team. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.group">group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]</code> | group block. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `team_slug`<sup>Required</sup> <a name="team_slug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.teamSlug"></a>

- *Type:* str

Slug of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.group"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup">put_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_group` <a name="put_group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup"></a>

```python
def put_group(
  value: typing.Union[IResolvable, typing.List[TeamSyncGroupMappingGroup]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.putGroup.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]

---

##### `reset_group` <a name="reset_group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMapping.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMapping.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMapping.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMapping.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a TeamSyncGroupMapping resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the TeamSyncGroupMapping to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing TeamSyncGroupMapping that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TeamSyncGroupMapping to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group">group</a></code> | <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput">group_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput">team_slug_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug">team_slug</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.group"></a>

```python
group: TeamSyncGroupMappingGroupList
```

- *Type:* <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList">TeamSyncGroupMappingGroupList</a>

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.groupInput"></a>

```python
group_input: typing.Union[IResolvable, typing.List[TeamSyncGroupMappingGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `team_slug_input`<sup>Optional</sup> <a name="team_slug_input" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlugInput"></a>

```python
team_slug_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `team_slug`<sup>Required</sup> <a name="team_slug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.teamSlug"></a>

```python
team_slug: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMapping.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamSyncGroupMappingConfig <a name="TeamSyncGroupMappingConfig" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMappingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  team_slug: str,
  group: typing.Union[IResolvable, typing.List[TeamSyncGroupMappingGroup]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug">team_slug</a></code> | <code>str</code> | Slug of the team. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group">group</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]</code> | group block. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `team_slug`<sup>Required</sup> <a name="team_slug" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.teamSlug"></a>

```python
team_slug: str
```

- *Type:* str

Slug of the team.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#team_slug TeamSyncGroupMapping#team_slug}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.group"></a>

```python
group: typing.Union[IResolvable, typing.List[TeamSyncGroupMappingGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#group TeamSyncGroupMapping#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#id TeamSyncGroupMapping#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamSyncGroupMappingGroup <a name="TeamSyncGroupMappingGroup" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMappingGroup(
  group_description: str,
  group_id: str,
  group_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription">group_description</a></code> | <code>str</code> | The description of the IdP group. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId">group_id</a></code> | <code>str</code> | The ID of the IdP group. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName">group_name</a></code> | <code>str</code> | The name of the IdP group. |

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupDescription"></a>

```python
group_description: str
```

- *Type:* str

The description of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#group_description TeamSyncGroupMapping#group_description}

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

The ID of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#group_id TeamSyncGroupMapping#group_id}

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

The name of the IdP group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.6.0/docs/resources/team_sync_group_mapping#group_name TeamSyncGroupMapping#group_name}

---

## Classes <a name="Classes" id="Classes"></a>

### TeamSyncGroupMappingGroupList <a name="TeamSyncGroupMappingGroupList" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMappingGroupList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> TeamSyncGroupMappingGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[TeamSyncGroupMappingGroup]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]]

---


### TeamSyncGroupMappingGroupOutputReference <a name="TeamSyncGroupMappingGroupOutputReference" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import team_sync_group_mapping

teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput">group_description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput">group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput">group_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription">group_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_description_input`<sup>Optional</sup> <a name="group_description_input" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescriptionInput"></a>

```python
group_description_input: str
```

- *Type:* str

---

##### `group_id_input`<sup>Optional</sup> <a name="group_id_input" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupIdInput"></a>

```python
group_id_input: str
```

- *Type:* str

---

##### `group_name_input`<sup>Optional</sup> <a name="group_name_input" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupNameInput"></a>

```python
group_name_input: str
```

- *Type:* str

---

##### `group_description`<sup>Required</sup> <a name="group_description" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupDescription"></a>

```python
group_description: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroupOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, TeamSyncGroupMappingGroup]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.teamSyncGroupMapping.TeamSyncGroupMappingGroup">TeamSyncGroupMappingGroup</a>]

---



