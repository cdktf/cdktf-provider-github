# `projectCard` Submodule <a name="`projectCard` Submodule" id="@cdktf/provider-github.projectCard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectCard <a name="ProjectCard" id="@cdktf/provider-github.projectCard.ProjectCard"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/r/project_card github_project_card}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer"></a>

```python
from cdktf_cdktf_provider_github import project_card

projectCard.ProjectCard(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_id: str,
  content_id: typing.Union[int, float] = None,
  content_type: str = None,
  id: str = None,
  note: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.columnId">column_id</a></code> | <code>str</code> | The ID of the project column. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.contentId">content_id</a></code> | <code>typing.Union[int, float]</code> | 'github_issue.issue_id'. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Must be either 'Issue' or 'PullRequest'. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#id ProjectCard#id}. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.note">note</a></code> | <code>str</code> | The note contents of the card. Markdown supported. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_id`<sup>Required</sup> <a name="column_id" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.columnId"></a>

- *Type:* str

The ID of the project column.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#column_id ProjectCard#column_id}

---

##### `content_id`<sup>Optional</sup> <a name="content_id" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.contentId"></a>

- *Type:* typing.Union[int, float]

'github_issue.issue_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#content_id ProjectCard#content_id}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.contentType"></a>

- *Type:* str

Must be either 'Issue' or 'PullRequest'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#content_type ProjectCard#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#id ProjectCard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `note`<sup>Optional</sup> <a name="note" id="@cdktf/provider-github.projectCard.ProjectCard.Initializer.parameter.note"></a>

- *Type:* str

The note contents of the card. Markdown supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#note ProjectCard#note}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetContentId">reset_content_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.resetNote">reset_note</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-github.projectCard.ProjectCard.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-github.projectCard.ProjectCard.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-github.projectCard.ProjectCard.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-github.projectCard.ProjectCard.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-github.projectCard.ProjectCard.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-github.projectCard.ProjectCard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-github.projectCard.ProjectCard.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-github.projectCard.ProjectCard.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-github.projectCard.ProjectCard.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-github.projectCard.ProjectCard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_content_id` <a name="reset_content_id" id="@cdktf/provider-github.projectCard.ProjectCard.resetContentId"></a>

```python
def reset_content_id() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-github.projectCard.ProjectCard.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-github.projectCard.ProjectCard.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_note` <a name="reset_note" id="@cdktf/provider-github.projectCard.ProjectCard.resetNote"></a>

```python
def reset_note() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-github.projectCard.ProjectCard.isConstruct"></a>

```python
from cdktf_cdktf_provider_github import project_card

projectCard.ProjectCard.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.projectCard.ProjectCard.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_github import project_card

projectCard.ProjectCard.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_github import project_card

projectCard.ProjectCard.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-github.projectCard.ProjectCard.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.cardId">card_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.columnIdInput">column_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentIdInput">content_id_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.noteInput">note_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.columnId">column_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentId">content_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.note">note</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-github.projectCard.ProjectCard.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-github.projectCard.ProjectCard.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-github.projectCard.ProjectCard.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-github.projectCard.ProjectCard.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-github.projectCard.ProjectCard.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-github.projectCard.ProjectCard.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-github.projectCard.ProjectCard.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.projectCard.ProjectCard.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.projectCard.ProjectCard.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.projectCard.ProjectCard.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.projectCard.ProjectCard.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.projectCard.ProjectCard.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.projectCard.ProjectCard.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.projectCard.ProjectCard.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `card_id`<sup>Required</sup> <a name="card_id" id="@cdktf/provider-github.projectCard.ProjectCard.property.cardId"></a>

```python
card_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-github.projectCard.ProjectCard.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `column_id_input`<sup>Optional</sup> <a name="column_id_input" id="@cdktf/provider-github.projectCard.ProjectCard.property.columnIdInput"></a>

```python
column_id_input: str
```

- *Type:* str

---

##### `content_id_input`<sup>Optional</sup> <a name="content_id_input" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentIdInput"></a>

```python
content_id_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-github.projectCard.ProjectCard.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `note_input`<sup>Optional</sup> <a name="note_input" id="@cdktf/provider-github.projectCard.ProjectCard.property.noteInput"></a>

```python
note_input: str
```

- *Type:* str

---

##### `column_id`<sup>Required</sup> <a name="column_id" id="@cdktf/provider-github.projectCard.ProjectCard.property.columnId"></a>

```python
column_id: str
```

- *Type:* str

---

##### `content_id`<sup>Required</sup> <a name="content_id" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentId"></a>

```python
content_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-github.projectCard.ProjectCard.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-github.projectCard.ProjectCard.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `note`<sup>Required</sup> <a name="note" id="@cdktf/provider-github.projectCard.ProjectCard.property.note"></a>

```python
note: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCard.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-github.projectCard.ProjectCard.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectCardConfig <a name="ProjectCardConfig" id="@cdktf/provider-github.projectCard.ProjectCardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.projectCard.ProjectCardConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_github import project_card

projectCard.ProjectCardConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_id: str,
  content_id: typing.Union[int, float] = None,
  content_type: str = None,
  id: str = None,
  note: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.columnId">column_id</a></code> | <code>str</code> | The ID of the project column. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentId">content_id</a></code> | <code>typing.Union[int, float]</code> | 'github_issue.issue_id'. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentType">content_type</a></code> | <code>str</code> | Must be either 'Issue' or 'PullRequest'. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#id ProjectCard#id}. |
| <code><a href="#@cdktf/provider-github.projectCard.ProjectCardConfig.property.note">note</a></code> | <code>str</code> | The note contents of the card. Markdown supported. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_id`<sup>Required</sup> <a name="column_id" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.columnId"></a>

```python
column_id: str
```

- *Type:* str

The ID of the project column.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#column_id ProjectCard#column_id}

---

##### `content_id`<sup>Optional</sup> <a name="content_id" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentId"></a>

```python
content_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

'github_issue.issue_id'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#content_id ProjectCard#content_id}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Must be either 'Issue' or 'PullRequest'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#content_type ProjectCard#content_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#id ProjectCard#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `note`<sup>Optional</sup> <a name="note" id="@cdktf/provider-github.projectCard.ProjectCardConfig.property.note"></a>

```python
note: str
```

- *Type:* str

The note contents of the card. Markdown supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/r/project_card#note ProjectCard#note}

---



