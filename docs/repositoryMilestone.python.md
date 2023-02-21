# `repositoryMilestone` Submodule <a name="`repositoryMilestone` Submodule" id="@cdktf/provider-github.repositoryMilestone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RepositoryMilestone <a name="RepositoryMilestone" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/repository_milestone github_repository_milestone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_milestone

repositoryMilestone.RepositoryMilestone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  owner: str,
  repository: str,
  title: str,
  description: str = None,
  due_date: str = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.owner">owner</a></code> | <code>str</code> | The owner of the GitHub Repository. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.repository">repository</a></code> | <code>str</code> | The name of the GitHub Repository. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.title">title</a></code> | <code>str</code> | The title of the milestone. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the milestone. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.dueDate">due_date</a></code> | <code>str</code> | The milestone due date. In 'yyyy-mm-dd' format. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#id RepositoryMilestone#id}. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.state">state</a></code> | <code>str</code> | The state of the milestone. Either 'open' or 'closed'. Default: 'open'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.owner"></a>

- *Type:* str

The owner of the GitHub Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#owner RepositoryMilestone#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.repository"></a>

- *Type:* str

The name of the GitHub Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#repository RepositoryMilestone#repository}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.title"></a>

- *Type:* str

The title of the milestone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#title RepositoryMilestone#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.description"></a>

- *Type:* str

A description of the milestone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#description RepositoryMilestone#description}

---

##### `due_date`<sup>Optional</sup> <a name="due_date" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.dueDate"></a>

- *Type:* str

The milestone due date. In 'yyyy-mm-dd' format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#due_date RepositoryMilestone#due_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#id RepositoryMilestone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.Initializer.parameter.state"></a>

- *Type:* str

The state of the milestone. Either 'open' or 'closed'. Default: 'open'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#state RepositoryMilestone#state}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDueDate">reset_due_date</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_due_date` <a name="reset_due_date" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetDueDate"></a>

```python
def reset_due_date() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import repository_milestone

repositoryMilestone.RepositoryMilestone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import repository_milestone

repositoryMilestone.RepositoryMilestone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import repository_milestone

repositoryMilestone.RepositoryMilestone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDateInput">due_date_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.ownerInput">owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repositoryInput">repository_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDate">due_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repository">repository</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.title">title</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `due_date_input`<sup>Optional</sup> <a name="due_date_input" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDateInput"></a>

```python
due_date_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `owner_input`<sup>Optional</sup> <a name="owner_input" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.ownerInput"></a>

```python
owner_input: str
```

- *Type:* str

---

##### `repository_input`<sup>Optional</sup> <a name="repository_input" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repositoryInput"></a>

```python
repository_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `due_date`<sup>Required</sup> <a name="due_date" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.repository"></a>

```python
repository: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.title"></a>

```python
title: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RepositoryMilestoneConfig <a name="RepositoryMilestoneConfig" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import repository_milestone

repositoryMilestone.RepositoryMilestoneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  owner: str,
  repository: str,
  title: str,
  description: str = None,
  due_date: str = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.owner">owner</a></code> | <code>str</code> | The owner of the GitHub Repository. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.repository">repository</a></code> | <code>str</code> | The name of the GitHub Repository. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.title">title</a></code> | <code>str</code> | The title of the milestone. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.description">description</a></code> | <code>str</code> | A description of the milestone. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dueDate">due_date</a></code> | <code>str</code> | The milestone due date. In 'yyyy-mm-dd' format. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#id RepositoryMilestone#id}. |
| <code><a href="#@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.state">state</a></code> | <code>str</code> | The state of the milestone. Either 'open' or 'closed'. Default: 'open'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.owner"></a>

```python
owner: str
```

- *Type:* str

The owner of the GitHub Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#owner RepositoryMilestone#owner}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.repository"></a>

```python
repository: str
```

- *Type:* str

The name of the GitHub Repository.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#repository RepositoryMilestone#repository}

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.title"></a>

```python
title: str
```

- *Type:* str

The title of the milestone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#title RepositoryMilestone#title}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the milestone.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#description RepositoryMilestone#description}

---

##### `due_date`<sup>Optional</sup> <a name="due_date" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.dueDate"></a>

```python
due_date: str
```

- *Type:* str

The milestone due date. In 'yyyy-mm-dd' format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#due_date RepositoryMilestone#due_date}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#id RepositoryMilestone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-github.repositoryMilestone.RepositoryMilestoneConfig.property.state"></a>

```python
state: str
```

- *Type:* str

The state of the milestone. Either 'open' or 'closed'. Default: 'open'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/repository_milestone#state RepositoryMilestone#state}

---



