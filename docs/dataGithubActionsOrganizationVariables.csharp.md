# `dataGithubActionsOrganizationVariables` Submodule <a name="`dataGithubActionsOrganizationVariables` Submodule" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGithubActionsOrganizationVariables <a name="DataGithubActionsOrganizationVariables" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables"></a>

Represents a {@link https://www.terraform.io/docs/providers/github/d/actions_organization_variables github_actions_organization_variables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsOrganizationVariables(Construct Scope, string Id, DataGithubActionsOrganizationVariablesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig">DataGithubActionsOrganizationVariablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig">DataGithubActionsOrganizationVariablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsOrganizationVariables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsOrganizationVariables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

DataGithubActionsOrganizationVariables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.variables">Variables</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList">DataGithubActionsOrganizationVariablesVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.variables"></a>

```csharp
public DataGithubActionsOrganizationVariablesVariablesList Variables { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList">DataGithubActionsOrganizationVariablesVariablesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGithubActionsOrganizationVariablesConfig <a name="DataGithubActionsOrganizationVariablesConfig" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsOrganizationVariablesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/actions_organization_variables#id DataGithubActionsOrganizationVariables#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/github/d/actions_organization_variables#id DataGithubActionsOrganizationVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGithubActionsOrganizationVariablesVariables <a name="DataGithubActionsOrganizationVariablesVariables" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsOrganizationVariablesVariables {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGithubActionsOrganizationVariablesVariablesList <a name="DataGithubActionsOrganizationVariablesVariablesList" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsOrganizationVariablesVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.get"></a>

```csharp
private DataGithubActionsOrganizationVariablesVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGithubActionsOrganizationVariablesVariablesOutputReference <a name="DataGithubActionsOrganizationVariablesVariablesOutputReference" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Github;

new DataGithubActionsOrganizationVariablesVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables">DataGithubActionsOrganizationVariablesVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariablesOutputReference.property.internalValue"></a>

```csharp
public DataGithubActionsOrganizationVariablesVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-github.dataGithubActionsOrganizationVariables.DataGithubActionsOrganizationVariablesVariables">DataGithubActionsOrganizationVariablesVariables</a>

---



