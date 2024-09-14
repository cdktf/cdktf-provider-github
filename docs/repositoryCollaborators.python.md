# `repositoryCollaborators` Submodule <a name="`repositoryCollaborators` Submodule" id="@cdktf/provider-github.repositoryCollaborators"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryCollaborators <a name="RepositoryCollaborators" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators github_repository_collaborators}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaborators(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  id: str = None,
  team: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsTeam]] = None,
  user: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsUser]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.team">team</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]</code> | team block. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]</code> | user block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.repository"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.team"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]

team block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#team RepositoryCollaborators#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.Initializer.parameter.user"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#user RepositoryCollaborators#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam">put_team</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser">put_user</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetTeam">reset_team</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetUser">reset_user</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_team` <a name="put_team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam"></a>

```python
def put_team(
  value: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsTeam]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putTeam.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]

---

##### `put_user` <a name="put_user" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser"></a>

```python
def put_user(
  value: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsUser]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.putUser.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_team` <a name="reset_team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetTeam"></a>

```python
def reset_team() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.resetUser"></a>

```python
def reset_user() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaborators.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaborators.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaborators.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaborators.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RepositoryCollaborators resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RepositoryCollaborators to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RepositoryCollaborators that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RepositoryCollaborators to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.invitationIds">invitation_ids</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.team">team</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList">RepositoryCollaboratorsTeamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.user">user</a></code> | <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList">RepositoryCollaboratorsUserList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.teamInput">team_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.userInput">user_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repository">repository</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `invitation_ids`<sup>Required</sup> <a name="invitation_ids" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.invitationIds"></a>

```python
invitation_ids: StringMap
```

- *Type:* cdktf.StringMap

---

##### `team`<sup>Required</sup> <a name="team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.team"></a>

```python
team: RepositoryCollaboratorsTeamList
```

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList">RepositoryCollaboratorsTeamList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.user"></a>

```python
user: RepositoryCollaboratorsUserList
```

- *Type:* <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList">RepositoryCollaboratorsUserList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `team_input`<sup>Optional</sup> <a name="team_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.teamInput"></a>

```python
team_input: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsTeam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.userInput"></a>

```python
user_input: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaborators.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryCollaboratorsConfig <a name="RepositoryCollaboratorsConfig" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaboratorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository: str,
  id: str = None,
  team: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsTeam]] = None,
  user: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsUser]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.repository">repository</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.team">team</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]</code> | team block. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.user">user</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]</code> | user block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#repository RepositoryCollaborators#repository}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#id RepositoryCollaborators#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `team`<sup>Optional</sup> <a name="team" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.team"></a>

```python
team: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsTeam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]

team block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#team RepositoryCollaborators#team}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsConfig.property.user"></a>

```python
user: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#user RepositoryCollaborators#user}

---

### RepositoryCollaboratorsTeam <a name="RepositoryCollaboratorsTeam" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaboratorsTeam(
  team_id: str,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.teamId">team_id</a></code> | <code>str</code> | Team ID or slug to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}. |

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

Team ID or slug to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#team_id RepositoryCollaborators#team_id}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}.

---

### RepositoryCollaboratorsUser <a name="RepositoryCollaboratorsUser" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaboratorsUser(
  username: str,
  permission: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.username">username</a></code> | <code>str</code> | (Required) The user to add to the repository as a collaborator. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.permission">permission</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.username"></a>

```python
username: str
```

- *Type:* str

(Required) The user to add to the repository as a collaborator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#username RepositoryCollaborators#username}

---

##### `permission`<sup>Optional</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser.property.permission"></a>

```python
permission: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.3.0/docs/resources/repository_collaborators#permission RepositoryCollaborators#permission}.

---

## Classes <a name="Classes" id="Classes"></a>

### RepositoryCollaboratorsTeamList <a name="RepositoryCollaboratorsTeamList" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaboratorsTeamList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RepositoryCollaboratorsTeamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsTeam]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]]

---


### RepositoryCollaboratorsTeamOutputReference <a name="RepositoryCollaboratorsTeamOutputReference" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamIdInput">team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamId">team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `team_id_input`<sup>Optional</sup> <a name="team_id_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamIdInput"></a>

```python
team_id_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `team_id`<sup>Required</sup> <a name="team_id" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.teamId"></a>

```python
team_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeamOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RepositoryCollaboratorsTeam]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsTeam">RepositoryCollaboratorsTeam</a>]

---


### RepositoryCollaboratorsUserList <a name="RepositoryCollaboratorsUserList" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaboratorsUserList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> RepositoryCollaboratorsUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[RepositoryCollaboratorsUser]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]]

---


### RepositoryCollaboratorsUserOutputReference <a name="RepositoryCollaboratorsUserOutputReference" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_collaborators

repositoryCollaborators.RepositoryCollaboratorsUserOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resetPermission">reset_permission</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_permission` <a name="reset_permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.resetPermission"></a>

```python
def reset_permission() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permissionInput">permission_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permission">permission</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `permission_input`<sup>Optional</sup> <a name="permission_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permissionInput"></a>

```python
permission_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `permission`<sup>Required</sup> <a name="permission" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.permission"></a>

```python
permission: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUserOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, RepositoryCollaboratorsUser]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-github.repositoryCollaborators.RepositoryCollaboratorsUser">RepositoryCollaboratorsUser</a>]

---



